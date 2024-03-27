import $ from 'jquery'
import { appendTokenIcon } from '../../lib/token_icon'

if ($('[data-page="token-details"]').length) {
  console.log("append token icon")
  const $tokenIconContainer = $('#token-icon')
  const chainID = $tokenIconContainer.data('chain-id')
  const addressHash = $tokenIconContainer.data('address-hash')
  const displayTokenIcons = $tokenIconContainer.data('display-token-icons')
  console.log(chainID)
  console.log(addressHash)
  console.log(displayTokenIcons)
  console.log("append token icon finished")

  appendTokenIcon($tokenIconContainer, chainID, addressHash, displayTokenIcons)
}
