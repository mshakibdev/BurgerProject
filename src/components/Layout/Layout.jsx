import React from 'react';

import Aux from '../../hoc/Auxi';

import CssClasses from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar,sidedrawer,backdrop</div>
        <main className ={CssClasses.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
