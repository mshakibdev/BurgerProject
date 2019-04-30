import React from 'react';

import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import CssClasses from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className ={CssClasses.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
