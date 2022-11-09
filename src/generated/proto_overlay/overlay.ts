/* eslint-disable */

export const protobufPackage = "mg.protocol.overlay";

export interface GetConfigurationReq {
}

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
  productId: number;
  ubiservicesApplicationId: string;
  ubiservicesSpaceId: string;
  virtualControlsEnabled: boolean;
}

export interface StartFailureRsp {
}

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

export interface ResizeFailureRsp {
}

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

export interface ShowUiReq {
}

export interface CloseUiReq {
}

export interface RefreshUiReq {
}

export interface BufferReadyReq {
}

export interface CreateProcessReq {
  pid: number;
  starterId: number;
}

export interface CreateProcessRsp {
  pid: number;
}

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

export interface IMEClearCompositionPush {
}

export interface IMESelectCandidatePush {
  selectedCandidateIndex: number;
}

export interface CursorChangePush {
  cursorId: number;
}

export interface StreamingHostStartPush {
  sessionId: string;
  ubiTicket: string;
  appId: string;
  isUat: boolean;
  bitrate: number;
  resolution: number;
  fps: number;
  gameName: string;
  guestsLimit: number;
  hostProfileId: string;
}

export interface StreamingHostStartResponse {
  result: boolean;
  hostPeerId: string;
  startConfig?: StreamingStartConfig;
  errorMsg: string;
  errorCode: number;
}

export interface StreamingHostGuestPermissions {
  gamepad: boolean;
  keyboard: boolean;
  mouse: boolean;
  immersive: boolean;
}

export interface StreamingHostGuestSettingsResponse {
  permissions?: StreamingHostGuestPermissions;
}

export interface StreamingHostGuestConnectedReq {
  guestId: number;
  profileId: string;
  settings?: StreamingHostGuestSettingsResponse;
  connectedTs: number;
}

export interface StreamingHostGuestDisconnectedReq {
  guestId: number;
  profileId: string;
}

export interface StreamingHostStopPush {
}

export interface StreamingHostKickPush {
  guestId: number;
}

export interface StreamingSettingsPush {
  bitrate: number;
  resolution: number;
  fps: number;
}

export interface StreamingHostPermissionsPush {
  clientId: number;
  mouseKeyboardAllowed: boolean;
  gamepadAllowed: boolean;
}

export interface StreamingStartConfig {
  width: number;
  height: number;
  bitrate: number;
  isAudioEnabled: boolean;
  isFocused: boolean;
}

export interface StreamingHostStopReq {
  result: boolean;
}

export interface StreamingSettingsReq {
  result: number;
}

export interface StreamingLatencyReq {
  latency: number;
  profileId: string;
}

export interface StreamingHostMetricsReq {
  latency: number;
  bitrate: number;
  clientId: number;
}

export interface StreamingVGPEventReq {
  source: number;
  profileId: string;
  streamingGamepadId: number;
}

export interface StreamingHostCreateTokenPush {
  usageLimit: number;
  expiration: number;
  profileId: string;
  tokenNumber: number;
}

export interface StreamingHostCreateTokenReq {
  result: boolean;
  token: string;
  tokenNumber: number;
}

export interface StreamingHostDecodeTokenPush {
  token: string;
  tokenNumber: number;
}

export interface StreamingHostDecodeTokenReq {
  result: boolean;
  appId: string;
  spaceId: string;
  productId: number;
  tokenNumber: number;
  gameName: string;
}

export interface StreamingHostFocusReq {
  focus: boolean;
}

export interface StreamingHostUpdateGuestRemainingTimePush {
  clientId: number;
  remainingTime: number;
}

export interface StreamingHostUpdateGuestRemainingTimeReq {
  result: boolean;
  hostPeerId: string;
  errorMsg: string;
  errorCode: number;
}

export interface ScreenshotReadyReq {
  isVulkanHDR: boolean;
}

export interface ScreenshotCaptureFailureReq {
}

export interface VideoCaptureFailureReq {
}

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

export interface IMECancelCompositionReq {
}

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
  streamingSettingsReq?: StreamingSettingsReq;
  streamingHostStartResponse?: StreamingHostStartResponse;
  streamingHostGuestConnectedReq?: StreamingHostGuestConnectedReq;
  streamingHostGuestDisconnectedReq?: StreamingHostGuestDisconnectedReq;
  streamingHostStopReq?: StreamingHostStopReq;
  streamingHostMetricsReq: StreamingHostMetricsReq[];
  streamingVgpEventReq?: StreamingVGPEventReq;
  streamingHostCreateTokenReq?: StreamingHostCreateTokenReq;
  streamingHostDecodeTokenReq?: StreamingHostDecodeTokenReq;
  streamingHostFocusReq?: StreamingHostFocusReq;
  streamingHostUpdateGuestRemainingTimeReq?: StreamingHostUpdateGuestRemainingTimeReq;
}

export interface Rsp {
  startRsp?: StartRsp;
  resizeRsp?: ResizeRsp;
  viewUpdatedRsp?: ViewUpdatedRsp;
  getConfigurationRsp?: GetConfigurationRsp;
  videoFrameReleasedRsp?: VideoFrameReleasedRsp;
}

export interface MultipleLogin {
}

export interface UserBannedPush {
}

export interface Push {
  multipleLogin?: MultipleLogin;
  captureScreenshot?: CaptureScreenshotPush;
  cursorChange?: CursorChangePush;
  userBanned?: UserBannedPush;
  uiOpened?: UiOpenedPush;
  uiClosed?: UiClosedPush;
  imeClearComposition?: IMEClearCompositionPush;
  imeSelectCandidate?: IMESelectCandidatePush;
  streamingSettings?: StreamingSettingsPush;
  streamingHostStart?: StreamingHostStartPush;
  streamingHostStop?: StreamingHostStopPush;
  streamingHostKick?: StreamingHostKickPush;
  streamingHostPermissions?: StreamingHostPermissionsPush;
  streamingHostCreateToken?: StreamingHostCreateTokenPush;
  streamingHostDecodeToken?: StreamingHostDecodeTokenPush;
  streamingHostUpdateGuestRemainingTime?: StreamingHostUpdateGuestRemainingTimePush;
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
