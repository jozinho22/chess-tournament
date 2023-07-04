import React from 'react';
import EnumViewType from '../content/EnumViewType';

export default React.createContext(
    {
        viewType: {},
        setViewType: (EnumViewType) => {}
    }
);