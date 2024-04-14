import React from 'react'

export default function SuccessAlerts(props) {
  return (<>

{props.alerts && <div class="alert alert-success" role="alert">
  {props.alerts.msg}
</div>}
  </>

  )
}
