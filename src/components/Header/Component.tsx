import React, { useEffect, useState } from 'react';

import {
  HomeOutlined
} from '@ant-design/icons';

import { Modal } from 'antd';
import { Carousel } from 'antd';
import logo from '@images/logo.png';
import './header.scss';
import { IGlobalState } from 'reducers';
import { connect, useDispatch } from 'react-redux';

import { Spin } from 'antd';

import unsplash from '../../unsplash';
import { toJson } from 'unsplash-js';
import { clearPainterState } from '@components/Pages/Painters/actions';

const HeaderMenu = () => (
  <ul className="header-menu">
    <li className="header-menu__item">
      <a href="/" className="header-menu__link">
        <HomeOutlined />
      </a>
    </li>
    <li className="header-menu__item"><a href="/painters" className="header-menu__link">Tekijät</a></li>
    <li className="header-menu__item"><a href="/about" className="header-menu__link">Tietoa palvelusta</a></li>
  </ul>
);

const contentStyle = {
  height: '160px',
  width: '200px',
  color: '#fff',
  background: '#364d79',
};

interface IProps { choosePhotosId?: Array<string> }
const Header = (props: IProps) => {
  const [visible, setVisible] = useState(false);
  const [choosedPhotos, setPhotos] = useState<Array<any>>([]);
  const dispatch = useDispatch()
  useEffect(() => {
    if (visible && props.choosePhotosId) {
      const photosPromises = props.choosePhotosId.map(id => unsplash.photos.getPhoto(id))
      Promise.all(photosPromises).then(res => Promise.all(res.map(r => toJson(r)))).then(photos => {
        setPhotos(photos);
      })
    }
  }, [visible])

  const showModal = () => {
    props.choosePhotosId && props.choosePhotosId.length > 0 && setVisible(true);
  }
  const handleOk = e => {
    dispatch(clearPainterState());
    setVisible(false);
  };
  const handleCancel = e => {
    setVisible(false);
  }

  return (<>
    <header role="banner" className="header">
      <nav className="header__top">
        <div className="container">
          <div className="logo-container">
            <a href="/" title="Home" className="header-logo">
              <img src={logo} alt="logo" width={100} height={100} />
            </a>
          </div>
          <h1 className="header__find-painter">Tekijäpankki</h1>
        </div>
      </nav>
      <nav className="header__bottom">
        <div className="container menu-content">
          <HeaderMenu />
          <div className="header__button-container">
            <button
              className={`header__button btn_transparent ${props.choosePhotosId && props.choosePhotosId.length && 'header__button_choosed'}`}
              onClick={(ev) => { ev.preventDefault(); showModal(); }}
            >
              Pyydä tarjous
              {props.choosePhotosId && props.choosePhotosId.length > 0 && <b className="button-counter_rounded">{props.choosePhotosId.length}</b>}
            </button>
          </div>
        </div>
        <div className="menu-content__mobile">
          <input
            type='checkbox'
            className='burger__checkbox'
            id={"burger-menu-inp"}
          />

          <label
            className='burger'
            htmlFor={"burger-menu-inp"}
          >
            <div className='burger__line' />
            <div className='burger__line' />
            <div className='burger__line' />
          </label>
          <div
            className='burger__menu'
          >
            <HeaderMenu />
          </div>
        </div>
      </nav>
    </header>
    <Modal
      title="Painters"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={'Buy all'}
      cancelText={'Close'}
      centered={true}
    >
      {choosedPhotos.length > 0 ? <>
        <Carousel
          dotPosition={'right'}
          style={{ maxHeight: 400 }}
        >
          {choosedPhotos.map(photo => (
            <div key={photo.id}>
              <div style={{ background: '#ccc' }}>
                <img style={{ maxHeight: 400, margin: 'auto' }} src={photo.urls.small} />
              </div>
            </div>
          ))}
        </Carousel>
      </>
        : <Spin size="large" style={{ width: '100%' }} />
      }
    </Modal>
  </>);
}

export default connect((state: IGlobalState) => ({
  ...state.painters
}))(React.memo(Header));