import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import './Drawer.css'

function Drawer({ ...props }) {
  return <DrawerPrimitive.Root {...props} />
}

function DrawerTrigger({ ...props }) {
  return <DrawerPrimitive.Trigger {...props} />
}

function DrawerPortal({ ...props }) {
  return <DrawerPrimitive.Portal {...props} />
}

function DrawerClose({ ...props }) {
  return <DrawerPrimitive.Close {...props} />
}

function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      className={`drawer-overlay ${className || ''}`}
      {...props}
    />
  )
}

function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPortal container={document.querySelector('.iphone-viewport')}>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={`drawer-content ${className || ''}`}
        {...props}
      >
        <div className="drawer-handle" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }) {
  return (
    <div
      className={`drawer-header ${className || ''}`}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }) {
  return (
    <div
      className={`drawer-footer ${className || ''}`}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }) {
  return (
    <DrawerPrimitive.Title
      className={`drawer-title ${className || ''}`}
      {...props}
    />
  )
}

function DrawerDescription({ className, ...props }) {
  return (
    <DrawerPrimitive.Description
      className={`drawer-description ${className || ''}`}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}