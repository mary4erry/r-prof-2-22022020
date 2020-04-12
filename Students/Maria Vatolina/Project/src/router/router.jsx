import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../components/Layout/Layout.jsx'

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = { Layout } />
                <Route exact path="/chat" render={ () => <Redirect to="/" /> } />
                <Route path="/chat/:chatId" 
                        render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> }/>
            </Switch>
        );
    }
}