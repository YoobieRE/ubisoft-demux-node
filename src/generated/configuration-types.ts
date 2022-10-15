/* eslint-disable */
export interface Configuration {
    version?:       number;
    root:           Root;
    localizations?: Localizations;
}

export interface Localizations {
    default?:         { [key: string]: null | string };
    "de-DE"?:         { [key: string]: string };
    "zh-CN"?:         JaJp;
    "fr-FR"?:         { [key: string]: string };
    "it-IT"?:         { [key: string]: string };
    "pt-BR"?:         CSCz;
    "es-ES"?:         { [key: string]: string };
    "cs-Cz"?:         CSCzClass;
    "da-DK"?:         { [key: string]: string };
    "nl-NL"?:         { [key: string]: string };
    "fi-FI"?:         { [key: string]: string };
    "hu-HU"?:         EnCA;
    "ja-JP"?:         JaJp;
    "ko-KO"?:         JaJp;
    "nb-NO"?:         { [key: string]: string };
    "pl-PL"?:         { [key: string]: string };
    "ru-RU"?:         { [key: string]: string };
    "sv-SE"?:         { [key: string]: string };
    "zh-TW"?:         JaJp;
    "pt-PT"?:         PtPT;
    "es-MX"?:         CSCz;
    "cs-CZ"?:         CSCz;
    "en-CA"?:         EnCA;
    "en-UK"?:         EnUK;
    "fr-CA"?:         FrCA;
    "fr-cA"?:         FrCAClass;
    "en-US"?:         EnUS;
    crash_reporting?: CrashReporting;
    upn_enabled?:     UpnEnabled;
    "th-TH"?:         ThTH;
}

export interface CrashReporting {
    space_id: string;
    app_id:   string;
}

export interface CSCz {
    l4?:                                 string;
    l3?:                                 string;
    l5?:                                 string;
    l6?:                                 string;
    l7?:                                 string;
    NOTIFICATION_UNSUPPORTED_DRIVER?:    string;
    NOTIFICATION_HARDWARE_REQUIREMENTS?: string;
    l8?:                                 string;
    l9?:                                 string;
    l10?:                                string;
    l11?:                                string;
    RELATED_GAMENAME_2946?:              string;
    RELATED_DESCRIPTION_2946?:           string;
    RELATED_GAMENAME_2947?:              string;
    RELATED_DESCRIPTION_2947?:           string;
    RELATED_GAMENAME_2948?:              string;
    RELATED_DESCRIPTION_2948?:           string;
    RELATED_GAMENAME_2949?:              string;
    RELATED_DESCRIPTION_2949?:           string;
    RELATED_GAMENAME_2950?:              string;
    RELATED_GAMENAME_2951?:              string;
    RELATED_GAMENAME_2952?:              string;
    RELATED_GAMENAME_2953?:              string;
    RELATED_GAMENAME_2954?:              string;
    RELATED_GAMENAME_2955?:              string;
    RELATED_DESCRIPTION_2950?:           string;
    RELATED_DESCRIPTION_2951?:           string;
    RELATED_DESCRIPTION_2952?:           string;
    RELATED_DESCRIPTION_2953?:           string;
    RELATED_DESCRIPTION_2954?:           string;
    RELATED_DESCRIPTION_2955?:           string;
    l1?:                                 string;
    l2?:                                 string;
    l12?:                                string;
    l14?:                                string;
    RELATED_GAMENAME_116?:               string;
    RELATED_DESCRIPTION_116?:            string;
    RELATED_GAMENAME_118?:               string;
    RELATED_DESCRIPTION_118?:            string;
    l15?:                                string;
    l16?:                                string;
    l17?:                                string;
}

export interface CSCzClass {
    l1?:  string;
    l15?: string;
    l18?: string;
}

export interface EnCA {
    l3?:                                 string;
    l4?:                                 string;
    l5?:                                 string;
    l6?:                                 string;
    l7?:                                 string;
    NOTIFICATION_UNSUPPORTED_DRIVER?:    string;
    NOTIFICATION_HARDWARE_REQUIREMENTS?: string;
    l1?:                                 string;
    l2?:                                 string;
    l15?:                                string;
    l18?:                                string;
}

export interface EnUK {
    l3: string;
    l4: string;
    l5: string;
    l6: string;
    l7: string;
}

export interface EnUS {
    NOTIFICATION_UNSUPPORTED_DRIVER?:    string;
    NOTIFICATION_HARDWARE_REQUIREMENTS?: string;
    NAME?:                               string;
}

export interface FrCA {
    l3: string;
    l4: string;
}

export interface FrCAClass {
    l5: string;
    l6: string;
    l7: string;
}

export interface JaJp {
    l1?:                                 string;
    l3?:                                 string;
    l4?:                                 string;
    l2?:                                 string;
    l5?:                                 string;
    l6?:                                 string;
    l7?:                                 string;
    NOTIFICATION_UNSUPPORTED_DRIVER?:    string;
    NOTIFICATION_HARDWARE_REQUIREMENTS?: string;
    NAME?:                               string;
    l8?:                                 string;
    l9?:                                 string;
    l10?:                                string;
    l11?:                                string;
    l12?:                                string;
    l13?:                                string;
    l14?:                                string;
    RELATED_GAMENAME_116?:               string;
    RELATED_DESCRIPTION_116?:            string;
    RELATED_GAMENAME_118?:               string;
    RELATED_DESCRIPTION_118?:            string;
    HOMEPAGE_URL?:                       string;
    HELP_URL?:                           string;
    l15?:                                string;
    l16?:                                string;
    l17?:                                string;
    l18?:                                string;
    l19?:                                string;
    RELATED_GAMENAME_2946?:              string;
    RELATED_DESCRIPTION_2946?:           string;
    RELATED_GAMENAME_2947?:              string;
    RELATED_DESCRIPTION_2947?:           string;
    RELATED_GAMENAME_2948?:              string;
    RELATED_DESCRIPTION_2948?:           string;
    RELATED_GAMENAME_2949?:              string;
    RELATED_DESCRIPTION_2949?:           string;
    RELATED_GAMENAME_2950?:              string;
    RELATED_GAMENAME_2951?:              string;
    RELATED_GAMENAME_2952?:              string;
    RELATED_GAMENAME_2953?:              string;
    RELATED_GAMENAME_2954?:              string;
    RELATED_GAMENAME_2955?:              string;
    RELATED_DESCRIPTION_2950?:           string;
    RELATED_DESCRIPTION_2951?:           string;
    RELATED_DESCRIPTION_2952?:           string;
    RELATED_DESCRIPTION_2953?:           string;
    RELATED_DESCRIPTION_2954?:           string;
    RELATED_DESCRIPTION_2955?:           string;
}

export interface PtPT {
    l1?:                                 string;
    l3?:                                 string;
    l4?:                                 string;
    l5?:                                 string;
    l6?:                                 string;
    l7?:                                 string;
    NOTIFICATION_UNSUPPORTED_DRIVER?:    string;
    NOTIFICATION_HARDWARE_REQUIREMENTS?: string;
    l8?:                                 string;
    l9?:                                 string;
    l10?:                                string;
    l11?:                                string;
    l12?:                                string;
    l13?:                                string;
    l14?:                                string;
    RELATED_GAMENAME_116?:               string;
    RELATED_DESCRIPTION_116?:            string;
    RELATED_GAMENAME_118?:               string;
    RELATED_DESCRIPTION_118?:            string;
    RELATED_DESCRIPTION_719?:            string;
    l16?:                                string;
    l17?:                                string;
    l18?:                                string;
    l19?:                                string;
    l2?:                                 string;
}

export interface ThTH {
    l1:  string;
    l2?: string;
    l3?: string;
    l4?: string;
}

export enum UpnEnabled {
    No = "no",
    Yes = "yes",
}

export interface Root {
    name?:                              null | string;
    uplay_pipe_required?:               UpnEnabled;
    show_properties?:                   UpnEnabled;
    overlay_virtual_control_enabled?:   UpnEnabled;
    overlay_notifications?:             OverlayNotification[];
    start_game?:                        StartGame;
    upn_enabled?:                       boolean | UpnEnabled;
    installer?:                         Installer;
    digital_distribution?:              DigitalDistribution;
    app_id?:                            string;
    space_id?:                          string;
    dynamic_app_id?:                    DynamicAppID[];
    is_visible?:                        UpnEnabled;
    is_ulc?:                            UpnEnabled;
    background_image?:                  string;
    thumb_image?:                       string;
    logo_image?:                        string;
    splash_image?:                      string;
    help_url?:                          string;
    facebook_url?:                      string;
    homepage_url?:                      null | string;
    news?:                              News;
    game_page_modules?:                 GamePageModules;
    icon_image?:                        null | string;
    overlay_injection_method?:          OverlayInjectionMethod;
    forum_url?:                         string;
    game_invites_enabled?:              UpnEnabled;
    title?:                             null;
    description?:                       null | string;
    change_language_enabled?:           UpnEnabled;
    cloud_saves?:                       UpnEnabled;
    player_stats?:                      PlayerStats;
    crash_reporting?:                   CrashReporting;
    sort_string?:                       string;
    club?:                              Club;
    basic_http_auth_enabled?:           boolean | UpnEnabled;
    after_game_report_ad?:              UpnEnabled;
    game_streaming_enabled?:            UpnEnabled;
    third_party_platform?:              RootThirdPartyPlatform;
    force_safe_mode?:                   UpnEnabled;
    background_installer_enabled?:      UpnEnabled;
    display_name?:                      string;
    party?:                             Party;
    uplay?:                             Uplay;
    background_color?:                  number | string;
    addons?:                            Addon[];
    shop_url?:                          string;
    optional_addon_enabled_by_default?: UpnEnabled;
    dialog_image?:                      string;
    windowed_mode?:                     UpnEnabled;
    overlay_notifications_position?:    OverlayNotificationsPosition;
    override_uplayid?:                  number;
    game_service_status_enabled?:       UpnEnabled;
    streaming?:                         Streaming;
    game_options?:                      GameOptions;
    expired?:                           UpnEnabled;
    cd_key_required?:                   UpnEnabled;
    legacy_friends_nicks_enabled?:      UpnEnabled;
    release_date?:                      string;
    preload_available_date?:            string;
    survey_url?:                        string;
    streams?:                           Streams;
    game_page_style?:                   string;
    discord?:                           Discord;
    orbit_exited?:                      UpnEnabled;
    dev?:                               Dev;
    settings_exe?:                      SettingsExe;
    orbit?:                             UpnEnabled;
    "digital distribution"?:            DigitalDistribution;
    is_dlc?:                            UpnEnabled;
    additional_content?:                AdditionalContent[];
    denuvo?:                            UpnEnabled;
    hidden?:                            UpnEnabled;
    sdk?:                               SDK;
    share_play?:                        UpnEnabled;
}

export interface AdditionalContent {
    name:            string;
    thumb_image_url: string;
    description:     string;
    download_url:    string;
}

export interface Addon {
    id:                                 number;
    is_visible:                         UpnEnabled;
    thumb_image?:                       string;
    name?:                              string;
    description?:                       string;
    optional_addon_enabled_by_default?: UpnEnabled;
}

export interface Club {
    enabled:             UpnEnabled;
    challenges_enabled?: UpnEnabled;
    platform_code?:      PlatformCode;
}

export enum PlatformCode {
    PC = "PC",
}

export interface Dev {
    require_legacy_game_password?: CyGamePassword;
    wegame?:                       Wegame;
    legacy_game_password?:         CyGamePassword;
    require_legcy_game_password?:  CyGamePassword;
    third_party_platform?:         DevThirdPartyPlatform;
    game_options?:                 GameOptions;
}

export interface GameOptions {
    presentInOverlay?: UpnEnabled;
    name:              string;
    filename:          string;
    model:             string;
    icon:              string;
    forum_url?:        string;
}

export enum CyGamePassword {
    Always = "always",
    OnlineOnly = "online_only",
}

export interface DevThirdPartyPlatform {
    name:                         string;
    platform_installation_status: WorkingDirectoryElement;
}

export interface WorkingDirectoryElement {
    register: string;
}

export interface Wegame {
    game_id: number;
}

export interface DigitalDistribution {
    version: number;
}

export interface Discord {
    enabled:         UpnEnabled;
    app_id:          number;
    large_image_key: string;
}

export interface DynamicAppID {
    id:     ID;
    app_id: string;
}

export enum ID {
    Gfn = "GFN",
    Luna = "Luna",
}

export interface GamePageModules {
    player_stats?:        Events;
    friends?:             Events;
    friends_suggestions?: FriendsSuggestions;
    streams?:             Events;
    news?:                Events;
    events?:              Events;
}

export interface Events {
    size: number;
}

export interface FriendsSuggestions {
    enabled: UpnEnabled;
}

export interface Installer {
    game_identifier?:      string;
    publisher?:            Publisher;
    dev_mode?:             UpnEnabled;
    help_url?:             string;
    about_url?:            string;
    upgraded_from_legacy?: UpnEnabled;
    shortcut_name?:        string;
    uninstall_icon_image?: string;
    uninstall_identifier?: string;
    uninstall_help_link?:  string;
    uninstall_about_link?: string;
}

export enum Publisher {
    Nadeo = "Nadeo",
    ReflectionsAUbisoftStudio = "Reflections a Ubisoft Studio",
    StrategicInnovationLab = "Strategic Innovation Lab",
    Ubisoft = "Ubisoft",
    UbisoftBlueByte = "Ubisoft Blue Byte",
    UbisoftMontpellier = "Ubisoft Montpellier",
    UbisoftMontreal = "Ubisoft Montreal",
}

export interface News {
    thread:                       null | string;
    game_service_status_enabled?: UpnEnabled;
}

export enum OverlayInjectionMethod {
    Default = "default",
    None = "none",
    SDK = "sdk",
}

export interface OverlayNotification {
    id:         number;
    text:       string;
    permanent?: UpnEnabled;
}

export enum OverlayNotificationsPosition {
    BottomLeft = "bottom_left",
    BottomRight = "bottom_right",
    TopLeft = "top_left",
}

export interface Party {
    party_enabled:           UpnEnabled;
    max_party_size?:         number;
    has_its_own_voice_chat?: UpnEnabled;
}

export interface PlayerStats {
    items: Item[];
}

export interface Item {
    id: string;
}

export interface SDK {
    devmode: UpnEnabled;
}

export interface SettingsExe {
    path:              SettingsExePath;
    working_directory: WorkingDirectoryElement;
}

export interface SettingsExePath {
    relative: string;
}

export interface StartGame {
    online?:            Online;
    offline?:           Offline;
    third_party_steam?: ThirdPartySteam;
    steam?:             Steam;
    oculus?:            Oculus;
    legacy_offline?:    LegacyOffline;
}

export interface LegacyOffline {
    executable: EvilUpdaterClass;
}

export interface EvilUpdaterClass {
    path:              SettingsExePath;
    arguments:         Arguments;
    working_directory: WorkingDirectoryElement;
}

export enum Arguments {
    OfflineWriteRegistry = "-offline -write_registry",
    Playoffline = "-playoffline",
}

export interface Oculus {
    oculus_app_id: number;
}

export interface Offline {
    executables:                         OfflineExecutable[];
    after_game_report_enabled?:          UpnEnabled;
    overlay_product_activation_enabled?: UpnEnabled;
}

export interface OfflineExecutable {
    shortcut_name?:       null | string;
    path:                 PurplePath;
    working_directory:    PurpleWorkingDirectory;
    arguments?:           string;
    icon_image?:          string;
    trial?:               Trial;
    play_arguments?:      string;
    internal_name?:       string;
    description?:         string;
    denuvo?:              UpnEnabled;
    uplay_pipe_required?: UpnEnabled;
    arguments_register?:  string;
    evil_updater?:        EvilUpdaterClass;
    background_image?:    string;
}

export interface PurplePath {
    relative?: string;
    register?: string;
}

export interface Trial {
    relative?:  string;
    arguments?: string;
}

export interface PurpleWorkingDirectory {
    register: string;
    append?:  string;
}

export interface Online {
    overlay_required?:                   UpnEnabled;
    overlay_shop_enabled?:               string;
    overlay_shop_sigma?:                 UpnEnabled;
    overlay_product_activation_enabled?: UpnEnabled;
    overlay_supported?:                  UpnEnabled;
    executables:                         OnlineExecutable[];
    pc_bang?:                            PCBang;
    overlay_shop_default_enabled?:       UpnEnabled;
    overlay_browser_home_url?:           string;
    after_game_report_enabled?:          UpnEnabled;
    overlay_shop_url?:                   string;
    ubi_password_required?:              UpnEnabled;
    legacy_ticket_enabled?:              UpnEnabled;
    overlay_shop_url_set_by_game?:       UpnEnabled;
    overlay_browser_enabled?:            UpnEnabled;
}

export interface OnlineExecutable {
    shortcut_name?:       null | string;
    path:                 PurplePath;
    working_directory:    PurpleWorkingDirectory;
    arguments?:           string;
    icon_image?:          string;
    trial?:               Trial;
    play_arguments?:      string;
    internal_name?:       string;
    uplay_pipe_required?: UpnEnabled;
    description?:         string;
    denuvo?:              UpnEnabled;
    arguments_register?:  string;
    evil_updater?:        EvilUpdater;
    background_image?:    string;
}

export interface EvilUpdater {
    path:              SettingsExePath;
    arguments?:        string;
    working_directory: PurpleWorkingDirectory;
}

export interface PCBang {
    shortcut_icon_image?: string;
    shortcut_url?:        string;
    shortcut_name?:       string;
}

export interface Steam {
    overlay_required?:                   UpnEnabled;
    overlay_shop_enabled?:               UpnEnabled;
    overlay_shop_sigma?:                 UpnEnabled;
    overlay_supported?:                  UpnEnabled;
    steam_app_id:                        number;
    steam_installation_status_register?: SteamInstallationStatusRegister;
    game_installation_status_register:   string;
    offline_arguments?:                  OfflineArguments;
    play_arguments?:                     null | string;
    offline_supported?:                  UpnEnabled;
    legacy_ticket_enabled?:              UpnEnabled;
    after_game_report_enabled?:          UpnEnabled;
    legacy_offline_supported?:           UpnEnabled;
    steam_shop_app_id?:                  number | null;
    overlay_shop_default_enabled?:       UpnEnabled;
    overlay_browser_home_url?:           string;
    overlay_product_activation_enabled?: UpnEnabled;
    uplay_pipe_required?:                UpnEnabled;
    arguments?:                          string;
    overlay_shop_url?:                   string;
    ubi_password_required?:              UpnEnabled;
    steam_override_app_id?:              number;
    steam_override_app_id_addon_id?:     number;
    overlay_shop_url_set_by_game?:       UpnEnabled;
}

export enum OfflineArguments {
    Offline = "-offline",
    OfflineConfigArguments = "-offline_config_arguments",
    RetailSteam = "-Retail Steam",
    StartedByUplayProd2916LiveLIVEPC = "/startedByUplay:Prod,2916,Live_LIVEPC",
}

export enum SteamInstallationStatusRegister {
    HKEYLOCALMACHINESOFTWAREValveSteamInstallPath = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Valve\\Steam\\InstallPath",
    SteamInstallationStatusRegisterHKEYLOCALMACHINESOFTWAREValveSteamInstallPath = "HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Valve\\\\Steam\\\\InstallPath",
}

export interface ThirdPartySteam {
    steam_app_id:                       number;
    steam_installation_status_register: SteamInstallationStatusRegister;
    game_installation_status_register:  string;
    installation_dependencies?:         WorkingDirectoryElement[];
}

export interface Streaming {
    remote_play: FriendsSuggestions;
    share_play?: SharePlay;
}

export interface SharePlay {
    enabled:       UpnEnabled;
    session_limit: number;
}

export interface Streams {
    link: string;
}

export interface RootThirdPartyPlatform {
    name:                          Name;
    platform_installation_status?: WorkingDirectoryElement;
    game_start_url?:               GameStart[];
    game_activation_status?:       WorkingDirectoryElement;
    game_start_working_dir?:       GameStart[];
    game_activation_url?:          GameActivationURL[];
}

export interface GameActivationURL {
    path: string;
}

export interface GameStart {
    register?: string;
    path?:     string;
}

export enum Name {
    Oculus = "Oculus",
    Origin = "Origin",
    Steam = "Steam",
}

export interface Uplay {
    preplayable_label?:                PreplayableLabel;
    achievements?:                     string;
    achievements_sync_id?:             number | string;
    game_code?:                        string;
    platform_code?:                    PlatformCode;
    achievements_ingame_notification?: UpnEnabled;
    friend_menu_item_list?:            FriendMenuItemList[];
}

export interface FriendMenuItemList {
    item_id: number;
    string:  String;
}

export interface String {
    "en-US": string;
    "sv-SE": string;
    "cs-CZ": string;
    "da-DK": string;
    "de-DE": string;
    "es-ES": string;
    "fi-FI": string;
    "fr-FR": string;
    "hu-HU": string;
    "it-IT": string;
    "ja-JP": string;
    "ko-KO": string;
    "nb-NO": string;
    "nl-NL": string;
    "pl-PL": string;
    "pt-PT": string;
    "pt-BR": string;
    "ru-RU": string;
    "zh-CN": string;
    "zh-TW": string;
}

export enum PreplayableLabel {
    Comingsoon = "comingsoon",
}
