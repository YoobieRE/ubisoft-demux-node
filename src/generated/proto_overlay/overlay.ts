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
  successRsp?: StartSuccessRsp | undefined;
  failureRsp?: StartFailureRsp | undefined;
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
  successRsp?: ResizeSuccessRsp | undefined;
  failureRsp?: ResizeFailureRsp | undefined;
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
  env: string;
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
  startConfig?: StreamingStartConfig | undefined;
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
  permissions?: StreamingHostGuestPermissions | undefined;
}

export interface StreamingHostGuestConnectedReq {
  guestId: number;
  profileId: string;
  settings?: StreamingHostGuestSettingsResponse | undefined;
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
  vidPid: number;
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

export interface StreamingHostUpdateCredentialsPush {
  ubiTicket: string;
  sessionId: string;
}

export interface StreamingHostReadyReq {
}

export interface StreamingHostSignalErrorReq {
  errorCode: number;
}

export interface StreamingHostSDKEventReq {
  severity: number;
  message: string;
  hostPeerId: string;
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
  startReq?: StartReq | undefined;
  resizeReq?: ResizeReq | undefined;
  win32KeyMessageReq?: Win32KeyMessageReq | undefined;
  appleKeyEventReq?: AppleKeyEventReq | undefined;
  mouseButtonPressedReq?: MouseButtonPressedReq | undefined;
  mouseButtonReleasedReq?: MouseButtonReleasedReq | undefined;
  mouseMovedReq?: MouseMovedReq | undefined;
  mouseWheelMovedReq?: MouseWheelMovedReq | undefined;
  closeUiReq?: CloseUiReq | undefined;
  refreshUiReq?: RefreshUiReq | undefined;
  getConfigurationReq?: GetConfigurationReq | undefined;
  mouseDoubleClickReq?: MouseDoubleClickReq | undefined;
  bufferReadyReq?: BufferReadyReq | undefined;
  videoFrameReadyReq?: VideoFrameReadyReq | undefined;
  screenshotReadyReq?: ScreenshotReadyReq | undefined;
  screenshotCaptureFailureReq?: ScreenshotCaptureFailureReq | undefined;
  videoCaptureFailureReq?: VideoCaptureFailureReq | undefined;
  langChangeReq?: LangChangeReq | undefined;
  updateFpsReq?: UpdateFpsReq | undefined;
  focusEventReq?: FocusEventReq | undefined;
  imeCommitTextReq?: IMECommitText | undefined;
  imeSetCompositionReq?: IMESetCompositionReq | undefined;
  imeCancelCompositionReq?: IMECancelCompositionReq | undefined;
  imeUpdateCandidatesReq?: IMEUpdateCandidatesReq | undefined;
  streamingSettingsReq?: StreamingSettingsReq | undefined;
  streamingHostStartResponse?: StreamingHostStartResponse | undefined;
  streamingHostGuestConnectedReq?: StreamingHostGuestConnectedReq | undefined;
  streamingHostGuestDisconnectedReq?: StreamingHostGuestDisconnectedReq | undefined;
  streamingHostStopReq?: StreamingHostStopReq | undefined;
  streamingHostMetricsReq: StreamingHostMetricsReq[];
  streamingVgpEventReq?: StreamingVGPEventReq | undefined;
  streamingHostCreateTokenReq?: StreamingHostCreateTokenReq | undefined;
  streamingHostDecodeTokenReq?: StreamingHostDecodeTokenReq | undefined;
  streamingHostFocusReq?: StreamingHostFocusReq | undefined;
  streamingHostUpdateGuestRemainingTimeReq?: StreamingHostUpdateGuestRemainingTimeReq | undefined;
  streamingHostReadyReq?: StreamingHostReadyReq | undefined;
  streamingHostSignalErrorReq?: StreamingHostSignalErrorReq | undefined;
  streamingHostSdkEventReq?: StreamingHostSDKEventReq | undefined;
}

export interface Rsp {
  startRsp?: StartRsp | undefined;
  resizeRsp?: ResizeRsp | undefined;
  viewUpdatedRsp?: ViewUpdatedRsp | undefined;
  getConfigurationRsp?: GetConfigurationRsp | undefined;
  videoFrameReleasedRsp?: VideoFrameReleasedRsp | undefined;
}

export interface MultipleLogin {
}

export interface UserBannedPush {
}

export interface Push {
  multipleLogin?: MultipleLogin | undefined;
  captureScreenshot?: CaptureScreenshotPush | undefined;
  cursorChange?: CursorChangePush | undefined;
  userBanned?: UserBannedPush | undefined;
  uiOpened?: UiOpenedPush | undefined;
  uiClosed?: UiClosedPush | undefined;
  imeClearComposition?: IMEClearCompositionPush | undefined;
  imeSelectCandidate?: IMESelectCandidatePush | undefined;
  streamingSettings?: StreamingSettingsPush | undefined;
  streamingHostStart?: StreamingHostStartPush | undefined;
  streamingHostStop?: StreamingHostStopPush | undefined;
  streamingHostKick?: StreamingHostKickPush | undefined;
  streamingHostPermissions?: StreamingHostPermissionsPush | undefined;
  streamingHostCreateToken?: StreamingHostCreateTokenPush | undefined;
  streamingHostDecodeToken?: StreamingHostDecodeTokenPush | undefined;
  streamingHostUpdateGuestRemainingTime?: StreamingHostUpdateGuestRemainingTimePush | undefined;
  streamingHostUpdateCredentials?: StreamingHostUpdateCredentialsPush | undefined;
}

export interface Upstream {
  req?: Req | undefined;
}

export interface Downstream {
  push?: Push | undefined;
  rsp?: Rsp | undefined;
}

export interface UpdateFpsReq {
  fps: number;
}
