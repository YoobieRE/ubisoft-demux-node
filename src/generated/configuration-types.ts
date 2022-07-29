/* eslint-disable */
export interface Configuration {
    version?:       number;
    root:           Root;
    localizations?: Localizations;
}

export interface Localizations {
    default?: { [key: string]: string };
    "da-DK"?: DaDk;
    "de-DE"?: DaDk;
    "es-ES"?: DaDk;
    "fi-FI"?: DaDk;
    "fr-FR"?: DaDk;
    "it-IT"?: DaDk;
    "nl-NL"?: DaDk;
    "nb-NO"?: DaDk;
    "pl-PL"?: DaDk;
    "sv-SE"?: DaDk;
    "ru-RU"?: DaDk;
    "pt-PT"?: DaDk;
    "pt-BR"?: DaDk;
    "ja-JP"?: DaDk;
    "zh-CN"?: DaDk;
    "ko-KO"?: DaDk;
    "zh-TW"?: DaDk;
    "cs-Cz"?: CSCzClass;
    "hu-HU"?: EsMX;
    "en-CA"?: CSCz;
    "en-UK"?: CSCz;
    "cs-CZ"?: CSCz;
    "es-MX"?: EsMX;
    "fr-CA"?: FrCA;
    "fr-cA"?: FrCAClass;
}

export interface CSCz {
    l3: string;
    l4: string;
    l5: string;
    l6: string;
    l7: string;
}

export interface CSCzClass {
    l15?: string;
    l18?: string;
    l1?:  string;
}

export interface DaDk {
    RELATED_DESCRIPTION_117?: string;
    RELATED_DESCRIPTION_119?: string;
    RELATED_DESCRIPTION_120?: string;
    RELATED_GAMENAME_116?:    string;
    RELATED_DESCRIPTION_116?: string;
    RELATED_GAMENAME_118?:    string;
    RELATED_DESCRIPTION_118?: string;
    l1?:                      string;
    l2?:                      string;
    l4?:                      string;
    l5?:                      string;
    l7?:                      string;
    l3?:                      string;
    l6?:                      string;
    l8?:                      string;
    l9?:                      string;
    l10?:                     string;
    l11?:                     string;
    l12?:                     string;
    l13?:                     string;
    l14?:                     string;
    l15?:                     string;
    l16?:                     string;
    l17?:                     string;
    l18?:                     string;
    l19?:                     string;
    DESCR?:                   string;
    NAME?:                    string;
    RELATED_GAMENAME_117?:    string;
    RELATED_GAMENAME_119?:    string;
    RELATED_GAMENAME_120?:    string;
}

export interface EsMX {
    l3?:  string;
    l4?:  string;
    l5?:  string;
    l6?:  string;
    l7?:  string;
    l1?:  string;
    l2?:  string;
    l15?: string;
    l18?: string;
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

export interface Root {
    name?:                              null | string;
    background_image?:                  string;
    thumb_image?:                       string;
    logo_image?:                        string;
    dialog_image?:                      string;
    icon_image?:                        string;
    sort_string?:                       string;
    start_game?:                        StartGame;
    installer?:                         Installer;
    digital_distribution?:              DigitalDistribution;
    cloud_saves?:                       AfterGameReportAd;
    facebook_url?:                      string;
    forum_url?:                         string;
    homepage_url?:                      string;
    help_url?:                          string;
    uplay?:                             Uplay;
    orbit_exited?:                      AfterGameReportAd;
    after_game_report_ad?:              AfterGameReportAd;
    game_streaming_enabled?:            AfterGameReportAd;
    legacy_friends_nicks_enabled?:      AfterGameReportAd;
    space_id?:                          string;
    club?:                              Club;
    crash_reporting?:                   CrashReporting;
    upn_enabled?:                       boolean | AfterGameReportAd;
    dev?:                               Dev;
    background_color?:                  number;
    party?:                             Party;
    display_name?:                      string;
    news?:                              News;
    game_page_modules?:                 GamePageModules;
    addons?:                            Addon[];
    force_safe_mode?:                   AfterGameReportAd;
    uplay_pipe_required?:               AfterGameReportAd;
    show_properties?:                   AfterGameReportAd;
    "digital distribution"?:            DigitalDistribution;
    is_visible?:                        AfterGameReportAd;
    is_dlc?:                            AfterGameReportAd;
    overlay_virtual_control_enabled?:   AfterGameReportAd;
    app_id?:                            string;
    game_invites_enabled?:              AfterGameReportAd;
    overlay_notifications?:             OverlayNotification[];
    splash_image?:                      string;
    streams?:                           Streams;
    game_page_style?:                   string;
    player_stats?:                      PlayerStats;
    description?:                       Description | null;
    is_ulc?:                            AfterGameReportAd;
    change_language_enabled?:           AfterGameReportAd;
    shop_url?:                          string;
    release_date?:                      Date;
    preload_available_date?:            Date;
    overlay_injection_method?:          string;
    streaming?:                         Streaming;
    optional_addon_enabled_by_default?: AfterGameReportAd;
    overlay_notifications_position?:    string;
    title?:                             null;
}

export interface Addon {
    id:                                 number;
    is_visible:                         AfterGameReportAd;
    name?:                              string;
    description?:                       string;
    thumb_image?:                       string;
    optional_addon_enabled_by_default?: AfterGameReportAd;
}

export enum AfterGameReportAd {
    No = "no",
    Yes = "yes",
}

export interface Club {
    enabled:             AfterGameReportAd;
    challenges_enabled?: AfterGameReportAd;
}

export interface CrashReporting {
    space_id: string;
    app_id:   string;
}

export enum Description {
    Descr = "DESCR",
}

export interface Dev {
    require_legacy_game_password: string;
}

export interface DigitalDistribution {
    version: number;
}

export interface GamePageModules {
    friends?:             Friends;
    friends_suggestions?: FriendsSuggestions;
    news?:                Friends;
    streams?:             Friends;
    player_stats?:        Friends;
}

export interface Friends {
    size: number;
}

export interface FriendsSuggestions {
    enabled: AfterGameReportAd;
}

export interface Installer {
    game_identifier:       string;
    publisher:             Publisher;
    help_url?:             string;
    upgraded_from_legacy?: AfterGameReportAd;
    about_url?:            string;
    shortcut_name?:        string;
}

export enum Publisher {
    Ubisoft = "Ubisoft",
}

export interface News {
    thread:                       string;
    game_service_status_enabled?: AfterGameReportAd;
}

export interface OverlayNotification {
    id:        number;
    text:      string;
    permanent: AfterGameReportAd;
}

export interface Party {
    party_enabled:   AfterGameReportAd;
    max_party_size?: number;
}

export interface PlayerStats {
    items: Item[];
}

export interface Item {
    id: string;
}

export interface StartGame {
    online:   Online;
    offline?: Offline;
}

export interface Offline {
    after_game_report_enabled?: AfterGameReportAd;
    executables:                Executable[];
}

export interface Executable {
    path:                 ExecutablePath;
    working_directory:    ExecutableWorkingDirectory;
    arguments_register?:  string;
    description?:         string;
    evil_updater?:        EvilUpdater;
    uplay_pipe_required?: AfterGameReportAd;
    arguments?:           string;
    internal_name?:       string;
    shortcut_name?:       null | string;
    play_arguments?:      string;
    icon_image?:          string;
    trial?:               Trial;
    denuvo?:              AfterGameReportAd;
}

export interface EvilUpdater {
    path:              EvilUpdaterPath;
    arguments?:        string;
    working_directory: EvilUpdaterWorkingDirectory;
}

export interface EvilUpdaterPath {
    relative: string;
}

export interface EvilUpdaterWorkingDirectory {
    register: string;
}

export interface ExecutablePath {
    relative?: string;
    register?: string;
}

export interface Trial {
    relative?:  string;
    arguments?: string;
}

export interface ExecutableWorkingDirectory {
    register: string;
    append?:  string;
}

export interface Online {
    overlay_supported?:                  AfterGameReportAd;
    legacy_ticket_enabled?:              AfterGameReportAd;
    after_game_report_enabled?:          AfterGameReportAd;
    executables:                         Executable[];
    overlay_required?:                   AfterGameReportAd;
    overlay_shop_enabled?:               AfterGameReportAd;
    overlay_shop_url?:                   string;
    overlay_shop_sigma?:                 AfterGameReportAd;
    overlay_product_activation_enabled?: AfterGameReportAd;
    overlay_shop_url_set_by_game?:       AfterGameReportAd;
    pc_bang?:                            PCBang;
    overlay_shop_default_enabled?:       AfterGameReportAd;
    overlay_browser_home_url?:           string;
}

export interface PCBang {
}

export interface Streaming {
    remote_play: FriendsSuggestions;
}

export interface Streams {
    link: string;
}

export interface Uplay {
    game_code?:            string;
    achievements?:         string;
    achievements_sync_id?: number | string;
}
