import React, {useEffect} from 'react';
import {getPromoBanner} from '../config/RemoteConfig';
import { logEvent} from '../analytics/AnalyticService';

const HomeScreen = () => {
    useEffect(() => {
        logEvent('screen_view', { screen_name: "HomeScreen"});
    }, []);

    const promoBanner = getPromoBanner();

    //Render the home screen with promoBanner
    return(
        //Your home screen layout
    );
};

export default HomeScreen;
