import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        {/* props são as propriedades de Main que são 
            passadas para o Header
         */}
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
                {/* props.children são os filhos de Main */}
            </div>
        </main>
    </React.Fragment>