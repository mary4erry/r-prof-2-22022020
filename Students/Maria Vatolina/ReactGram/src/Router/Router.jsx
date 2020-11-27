import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'

export default class Router extends React.Component {
   render() {
      return (
      <Switch>
         <Route exact path='/' component={ Layout } />

         <Route exact 
            path='/:chatId/' 
            render={ (obj) =>
               <Layout usr={this.props.usr} 
                  chatId={ Number(obj.match.params.chatId)} />
            } 
         />
        
         {/* <Route exact path='/chat/2/' render={ () =>
            <Layout chatId={ 2 } /> } />
         <Route exact path='/chat/3/' render={ () =>
            <Layout chatId={ 3 } /> } /> */}
      </Switch>
      )
   }
}
