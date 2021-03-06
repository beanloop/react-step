import * as React from 'react'
import {CSSProperties} from 'react'
import {FontIcon} from 'react-toolbox/lib/font_icon'
import {Status} from '../entities'
import {Circle, defaultActiveColor, defaultAlertColor} from '../utils'

export type Props = {
  step: number
  active?: boolean
  status?: Status
  activeColor?: string
  alertColor?: string
  style?: CSSProperties
}

/**
 * An material warning icon to use for steps that needs the
 * users attention.
 */
export const AlertIcon = ({alertColor = defaultAlertColor}) =>
  <FontIcon value='warning' style={{color: alertColor}} />

const circleStyle = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: 12,
}

/**
 * A material check icon in a circle to use for steps that
 * are completed.
 */
export const DoneIcon = ({activeColor = defaultActiveColor}) =>
  <Circle
    size={24}
    color={activeColor}
    style={circleStyle}
  >
    <FontIcon value='check' style={{fontSize: 14}} />
  </Circle>

/**
 * A circle with the step number to use for most steps.
 */
export const StepNumber = ({step, active, activeColor = defaultActiveColor}) =>
  <Circle
    size={24}
    color={active ? activeColor : 'rgba(0, 0, 0, 0.38)'}
    style={circleStyle}
  >
    {step}
  </Circle>

/**
 * Renders the appropriate step icon for the current status.
 */
export const StepCircle = ({step, active = true, status, style, activeColor, alertColor}: Props) =>
  <div style={{
    padding: 8,
    backgroundColor: 'white',
    ...style,
  }}>{
    status === 'alert' ?
      <AlertIcon alertColor={alertColor} /> :
    status === 'done' ?
      <DoneIcon activeColor={activeColor} />
    :
      <StepNumber step={step} active={active} activeColor={activeColor} />
  }</div>
