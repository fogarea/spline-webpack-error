import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './IndexPage.scss';
import Spline from '@splinetool/react-spline';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            <Spline
                scene="https://prod.spline.design/PRHVU-f8fecoRu8W/scene.splinecode"
                //scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    );
}
