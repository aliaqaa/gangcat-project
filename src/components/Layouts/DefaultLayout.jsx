import React from 'react'
import { Outlet } from 'react-router'
import DefualtHeader from '../common/DefaultHeader/DefualtHeader'
import DefaultFooter from '../common/DefaultFooter/DefaultFooter'
import MusicControlButton from '../common/MusicControlButton/MusicControlButton'
import GoToTopButton from "../common/GotToTopButton/GotToTopButton";

function DefaultLayout() {
  return (
    <>
    <DefualtHeader />
    <Outlet />
    <DefaultFooter />
    <GoToTopButton/>
    <MusicControlButton/>
    </>
  )
}

export default DefaultLayout