import React from 'react';
import './Widget.css';
import logo from './logo.svg';
import icon from './icon.svg';
import { useTextKitWidget } from '@statflo/textkit-widget-sdk-react'

export default function Widget() {
    const { state, setOpen } = useTextKitWidget();

    return (
        <div className='widget-container' style={{ height: state.maxHeight }}>
            <div className='widget-flex-container'>
                <img src={icon} alt="Icon" />

                <h1 className='widget-title'>
                    This is an Action Widget.
                </h1>

                <p className='widget-copy'>These widgets are accessed via the Actions menu and are meant to provide the user with tools to perform necessary functions.</p>

                <p className='widget-copy'>Action widgets can speak directly with TextKit and can be customized however you need - build unique flows/tools or connect external apps.</p>

                <a href='https://docs.textkit.io' rel='noreferrer' target="_blank" className='widget-link widget-link__doc'>Read our docs to learn more.</a>
            </div>
            <div className='widget-flex-container'>
                <img src={logo} alt="TextKit Logo" />
            </div>
            <div className='widget-action-bar'>
                <button onClick={() => setOpen(false)} className='widget-cancel'>Cancel</button>
                <button onClick={() => setOpen(false)} className='widget-button'>Confirm</button>
            </div>
        </div>
    )
}