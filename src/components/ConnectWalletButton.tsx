import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{ background: 'linear-gradient(90deg,#c561ff,#53f)', borderRadius:'10px', padding: '20px 20px', transition: 'background .3s ease-in' }}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
