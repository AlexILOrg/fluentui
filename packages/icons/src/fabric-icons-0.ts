  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-0"`,
      src: `url('${baseUrl}fabric-icons-0-29734c63.woff') format('woff')`
    },
    icons: {
      'DecreaseIndentLegacy': '\uE290',
      'IncreaseIndentLegacy': '\uE291',
      'SizeLegacy': '\uE2B2',
      'InternetSharing': '\uE704',
      'Brightness': '\uE706',
      'MapPin': '\uE707',
      'Airplane': '\uE709',
      'Tablet': '\uE70A',
      'QuickNote': '\uE70B',
      'Video': '\uE714',
      'People': '\uE716',
      'Phone': '\uE717',
      'Pin': '\uE718',
      'Shop': '\uE719',
      'Stop': '\uE71A',
      'Link': '\uE71B',
      'AllApps': '\uE71D',
      'Zoom': '\uE71E',
      'ZoomOut': '\uE71F',
      'Microphone': '\uE720',
      'Camera': '\uE722',
      'Attach': '\uE723',
      'Send': '\uE724',
      'FavoriteList': '\uE728',
      'PageSolid': '\uE729',
      'Forward': '\uE72A',
      'Back': '\uE72B',
      'Refresh': '\uE72C',
      'Lock': '\uE72E',
      'ReportHacked': '\uE730',
      'EMI': '\uE731',
      'MiniLink': '\uE732',
      'Blocked': '\uE733',
      'ReadingMode': '\uE736',
      'Favicon': '\uE737',
      'Remove': '\uE738',
      'Checkbox': '\uE739',
      'CheckboxComposite': '\uE73A',
      'CheckboxIndeterminate': '\uE73C',
      'CheckboxCompositeReversed': '\uE73D',
      'BackToWindow': '\uE73F',
      'FullScreen': '\uE740',
      'Print': '\uE749',
      'Up': '\uE74A',
      'Down': '\uE74B',
      'OEM': '\uE74C',
      'Save': '\uE74E',
      'Cloud': '\uE753',
      'CommandPrompt': '\uE756',
      'Sad': '\uE757',
      'SIPMove': '\uE759',
      'EraseTool': '\uE75C',
      'GripperTool': '\uE75E',
      'Dialpad': '\uE75F',
      'PageLeft': '\uE760',
      'PageRight': '\uE761',
      'MultiSelect': '\uE762',
      'KeyboardClassic': '\uE765',
      'Play': '\uE768',
      'Pause': '\uE769',
      'Emoji2': '\uE76E',
      'GripperBarHorizontal': '\uE76F',
      'System': '\uE770',
      'Personalize': '\uE771',
      'SearchAndApps': '\uE773',
      'Globe': '\uE774',
      'ContactInfo': '\uE779',
      'Unpin': '\uE77A',
      'Contact': '\uE77B',
      'Memo': '\uE77C',
      'Paste': '\uE77F',
      'WindowsLogo': '\uE782',
      'Error': '\uE783',
      'GripperBarVertical': '\uE784',
      'Unlock': '\uE785',
      'AutoEnhanceOn': '\uE78D',
      'AutoEnhanceOff': '\uE78E',
      'Color': '\uE790',
      'SaveAs': '\uE792',
      'Light': '\uE793',
      'Filters': '\uE795',
      'AspectRatio': '\uE799',
      'Contrast': '\uE7A1',
      'Redo': '\uE7A6',
      'Crop': '\uE7A8',
      'PhotoCollection': '\uE7AA',
      'Album': '\uE7AB',
      'Rotate': '\uE7AD',
      'PanoIndicator': '\uE7B0',
      'RedEye': '\uE7B3',
      'ThumbnailView': '\uE7B6',
      'Package': '\uE7B8',
      'Warning': '\uE7BA',
      'Financial': '\uE7BB',
      'Education': '\uE7BE',
      'ShoppingCart': '\uE7BF',
      'Train': '\uE7C0',
      'Move': '\uE7C2',
      'TouchPointer': '\uE7C9',
      'Merge': '\uE7D5'
    }
  };

  registerIcons(subset, options);
}