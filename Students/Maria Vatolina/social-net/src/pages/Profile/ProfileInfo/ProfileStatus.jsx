import React from 'react'

class ProfileStatus extends React.Component  {
   state = {
      editMode: false,
      status: this.props.status
   }
   // toggleEditMode = () => {

   // }
   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }
   deactivateEditMode = () => {
      this.setState( {
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      }) 
   }

   render() {
      return (
         <div> 
            {  this.state.editMode 
               ? <div>
                     <input
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode} 
                        value={this.state.status} type="text"
                        autoFocus={true}/>
                  </div> 
               : <div>
                  <span onDoubleClick={this.activateEditMode}>
                     {this.props.status || '---'}
                  </span>
               </div>
            }
         </div> 
      )
   }   
}

export default  ProfileStatus