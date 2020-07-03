import React from 'react'

class ProfileStatus extends React.Component  {
   state = {
      editMode: false
   }
   // toggleEditMode = () => {

   // }
   activateEditMode = () => {
      this.setState( {
         editMode: true
      })
   }
   deactivateEditMode = () => {
      this.setState( {
         editMode: false
      })
   }
   render() {
      return (
         <div> 
            {this.state.editMode 
               ? <div>
                     <input 
                        onBlur={this.deactivateEditMode} 
                        value={this.props.status} type="text"
                        autoFocus={true}/>
                  </div> 
               : <div>
                  <span onDoubleClick={ this.activateEditMode}> {this.props.status} </span>
               </div>}
            
           
         </div>
         
      )
   }
      
}

export default  ProfileStatus