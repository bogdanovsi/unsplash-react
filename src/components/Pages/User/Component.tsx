import React, { useCallback, useEffect, useRef, useState } from 'react';

import { List } from 'antd';
import { Image } from 'antd';

import { unsplash, toJson } from '@utils/configureUnsplash';

const UserComponent = ({ match, ...props }) => {
    const {
        params: { painterName }
    } = match;
    const [photos, setPhotos] = useState<Array<any>>([]);
    const [user, setUser] = useState<any>(null);
    const [page, setPage] = useState<number>(1);
    useEffect(() => {
        unsplash.users.profile(painterName).then(toJson).then(setUser);
        unsplash.users.photos(painterName, page, 20, "latest").then(toJson).then(setPhotos);
    }, []);
    useEffect(() => {
        unsplash.users.photos(painterName, page, 20, "latest").then(toJson).then(newPhotos => setPhotos((prevPhotos) => prevPhotos.concat(newPhotos)));
    }, [page])

    return (
        <section className="container">
            {user && <div className="painters-item">
                <div className="painters-info">
                    <div className="painters-info_person">
                        <Image src={user.profile_image.small} style={{ marginRight: '5px' }} />
                        <p>{user.name}</p>
                    </div>
                    {user.bio && user.bio != '' && <p>{user.bio}</p>}
                </div>
            </div>}
            {photos && <section>
                <h3>User photos</h3>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={photos}
                    renderItem={photo => (
                        <List.Item>
                            <Image src={photo.urls.small} />
                        </List.Item>
                    )}
                />
            </section>}
        </section>
    );
}

export default UserComponent;