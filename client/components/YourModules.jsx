import React from 'react'
import { connect } from 'react-redux'
import ModuleCard from './ModuleCard'

class YourModules extends React.Component {
  render () {
    return (
      <>
        {this.props.yourModules.map((module, idx) => {
          return <ModuleCard key={idx} module={module} />
        })}
      </>
    )
  }


}

export default connect()(YourModules)