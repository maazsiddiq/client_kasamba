import React from 'react';
import './bottom_image.css'
import launching from '../../images/LaunchingAppBanner.svg';

const BottomImage = () => {
    return (
        <div>
            <img src={launching} className="w-100 m-0 p-0 dropshadow"/>
        </div>
    )
}
export default BottomImage;