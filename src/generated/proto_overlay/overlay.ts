/* eslint-disable */
export const protobufPackage = 'mg.protocol.overlay';

export interface GetConfigurationReq {}

export interface GetConfigurationRsp {
  libraryPath: string;
}

export interface StartReq {
  width: number;
  height: number;
  pid: number;
}

export interface StartSuccessRsp {
  sharedMemoryName: string;
  sharedMemoryMutexName: string;
  virtualControlsEnabled: boolean;
}

export interface StartFailureRsp {}

export interface StartRsp {
  successRsp?: StartSuccessRsp;
  failureRsp?: StartFailureRsp;
}

export interface ResizeReq {
  width: number;
  height: number;
}

export interface ResizeSuccessRsp {
  sharedMemoryName: string;
  sharedMemoryMutexName: string;
}

export interface ResizeFailureRsp {}

export interface ResizeRsp {
  successRsp?: ResizeSuccessRsp;
  failureRsp?: ResizeFailureRsp;
}

export interface Rectangle {
  topLeftPosX: number;
  topLeftPosY: number;
  bottomRightPosX: number;
  bottomRightPosY: number;
}

export interface ViewUpdatedRsp {
  dirtyRectangles: Rectangle[];
  version: number;
}

export interface FocusEventReq {
  focus: boolean;
}

export interface Win32KeyMessageReq {
  message: number;
  wParam: number;
  lParam: number;
}

export interface AppleKeyEventReq {
  type: number;
  modifierFlags: number;
  timestamp: number;
  characters: string;
  charactersIgnoringModifiers: string;
  isARepeat: number;
  keyCode: number;
}

export interface MouseButtonPressedReq {
  button: number;
}

export interface MouseButtonReleasedReq {
  button: number;
}

export interface MouseDoubleClickReq {
  button: number;
}

export interface MouseMovedReq {
  x: number;
  y: number;
  modifiers: number;
  isVirtual: boolean;
}

export interface MouseWheelMovedReq {
  scrollX: number;
  scrollY: number;
}

export interface LangChangeReq {
  langAbbreviate: string;
}

export interface ShowUiReq {}

export interface CloseUiReq {}

export interface RefreshUiReq {}

export interface BufferReadyReq {}

export interface CreateProcessReq {
  pid: number;
  starterId: number;
}

export interface CreateProcessRsp {
  pid: number;
}

export interface StartStreamPush {
  frameWidth: number;
  frameHeight: number;
  bufferSize: number;
  framesPerSecond: number;
  bufferName: string;
}

export interface EndStreamPush {}

export interface VideoFrameReadyReq {
  bufferIndex: number;
}

export interface VideoFrameReleasedRsp {
  bufferIndex: number;
}

export interface CaptureScreenshotPush {
  frameWidth: number;
  frameHeight: number;
  bufferName: string;
  bufferSize: number;
}

export interface UiOpenedPush {
  success: boolean;
}

export interface UiClosedPush {
  success: boolean;
}

export interface IMEClearCompositionPush {}

export interface IMESelectCandidatePush {
  selectedCandidateIndex: number;
}

export interface CursorChangePush {
  cursorId: number;
}

export interface SharePlayStartPush {
  sessionId: string;
  token: string;
  appId: string;
  isUat: boolean;
  bitrate: number;
  guestId: string;
  mouseKeyboardAllowed: boolean;
  gamepadAllowed: boolean;
}

export interface SharePlayStopPush {}

export interface SharePlaySettingsPush {
  bitrate: number;
  mouseKeyboardAllowed: boolean;
  gamepadAllowed: boolean;
}

export interface SharePlayStartConfig {
  width: number;
  height: number;
  bitrate: number;
  isAudioEnabled: boolean;
  isFocused: boolean;
}

export interface SharePlayStartReq {
  result: boolean;
  inviteToken: string;
  startConfig?: SharePlayStartConfig;
}

export interface SharePlayStopReq {
  result: boolean;
}

export interface SharePlaySettingsReq {
  result: number;
}

export interface SharePlayGuestConnectedReq {
  guestId: string;
}

export interface SharePlayGuestDisconnectedReq {
  guestId: string;
}

export interface SharePlayLatencyReq {
  latency: number;
}

export interface ScreenshotReadyReq {
  isVulkanHDR: boolean;
}

export interface ScreenshotCaptureFailureReq {}

export interface VideoCaptureFailureReq {}

export interface IMECommitText {
  text: string;
}

export interface IMECompositionUnderline {
  from: number;
  to: number;
  color: number;
  backgroundColor: number;
  thick: number;
}

export interface IMESetCompositionReq {
  text: string;
  compositionStart: number;
  underlines: IMECompositionUnderline[];
}

export interface IMECancelCompositionReq {}

export interface IMEUpdateCandidatesReq {
  candidates: string[];
  selectedIndex: number;
}

export interface Req {
  startReq?: StartReq;
  resizeReq?: ResizeReq;
  win32KeyMessageReq?: Win32KeyMessageReq;
  appleKeyEventReq?: AppleKeyEventReq;
  mouseButtonPressedReq?: MouseButtonPressedReq;
  mouseButtonReleasedReq?: MouseButtonReleasedReq;
  mouseMovedReq?: MouseMovedReq;
  mouseWheelMovedReq?: MouseWheelMovedReq;
  closeUiReq?: CloseUiReq;
  refreshUiReq?: RefreshUiReq;
  getConfigurationReq?: GetConfigurationReq;
  mouseDoubleClickReq?: MouseDoubleClickReq;
  bufferReadyReq?: BufferReadyReq;
  videoFrameReadyReq?: VideoFrameReadyReq;
  screenshotReadyReq?: ScreenshotReadyReq;
  screenshotCaptureFailureReq?: ScreenshotCaptureFailureReq;
  videoCaptureFailureReq?: VideoCaptureFailureReq;
  langChangeReq?: LangChangeReq;
  updateFpsReq?: UpdateFpsReq;
  focusEventReq?: FocusEventReq;
  imeCommitTextReq?: IMECommitText;
  imeSetCompositionReq?: IMESetCompositionReq;
  imeCancelCompositionReq?: IMECancelCompositionReq;
  imeUpdateCandidatesReq?: IMEUpdateCandidatesReq;
  sharePlayStartReq?: SharePlayStartReq;
  sharePlayStopReq?: SharePlayStopReq;
  sharePlaySettingsReq?: SharePlaySettingsReq;
  sharePlayGuestConnectedReq?: SharePlayGuestConnectedReq;
  sharePlayGuestDisconnectedReq?: SharePlayGuestDisconnectedReq;
  sharePlayLatencyReq?: SharePlayLatencyReq;
}

export interface Rsp {
  startRsp?: StartRsp;
  resizeRsp?: ResizeRsp;
  viewUpdatedRsp?: ViewUpdatedRsp;
  getConfigurationRsp?: GetConfigurationRsp;
  videoFrameReleasedRsp?: VideoFrameReleasedRsp;
}

export interface MultipleLogin {}

export interface UserBannedPush {}

export interface Push {
  multipleLogin?: MultipleLogin;
  startStream?: StartStreamPush;
  endStream?: EndStreamPush;
  captureScreenshot?: CaptureScreenshotPush;
  cursorChange?: CursorChangePush;
  userBanned?: UserBannedPush;
  uiOpened?: UiOpenedPush;
  uiClosed?: UiClosedPush;
  imeClearComposition?: IMEClearCompositionPush;
  imeSelectCandidate?: IMESelectCandidatePush;
  sharePlayStart?: SharePlayStartPush;
  sharePlayStop?: SharePlayStopPush;
  sharePlaySettings?: SharePlaySettingsPush;
}

export interface Upstream {
  req?: Req;
}

export interface Downstream {
  push?: Push;
  rsp?: Rsp;
}

export interface UpdateFpsReq {
  fps: number;
}
