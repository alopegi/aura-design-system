export type AnyFn = (...args: any[]) => any

export interface SharedBasic {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export type AuraColors =
  | "blue"
  | "teal-green"
  | "snow"
  | "purple"
  | "orange"
  | "orange-rose"
  | "pink"
  | "pink-purple"
  | "lemon-green"
  | "green"
  | "yellow"
  | "white"
  | "--aura-accents-0" 
  | "--aura-accents-1" 
  | "--aura-accents-2" 
  | "--aura-accents-3" 
  | "--aura-accents-4" 
  | "--aura-accents-5"
  | "--aura-accents-6"
  | "--aura-accents-7"
  | "--aura-accents-8"
  | "--aura-accents-9"
  | "--aura-accents-10"


export type AuraIcons =
  | "search"
  | "arrowDown"
  | "arrowRight"
  | "arrowLeft"
  | "arrowUp"
  | "mail"
  | "user"
  | "bag"
  | "bagAdd"
  | "gift"
  | "link"
  | "close"
  | "menu"
  | "box"
  | "heart"
  | "heartFill"
  | "heartFillBlack"
  | "shop"
  | "pay"
  | "location"
  | "key"
  | "arrowAltLeft"
  | "arrowAltRigth"
  | "check"
  | "circle"
  | "poweroff"
  | "secure"
  | "openLink"
  | "view"
  | "viewOff"
  | "copy"
  | "delete"
  | "edit"
  | "bell"
  | "github"
  | "youtube"
  | "instagram"
  | "twitter"
  | "facebook"
  | "giphy"
  | "stock"

export type HelpType = "warning" | "info" | "danger" | "success"

export type ButtonType = "link" | "fill" | "pill" | "menu" 

export type Target = "_self" | "_blank" | "_parent" | "_top" | "framename"

export type AuraSpace = "p0" | "pad" | "inside-pad" | "aura" | "wall-pad"

export type AuraContainer = "smash" | "smesh" | "smish" | "smosh" | "smush"

export type AuraGrid = "one" | "two" | "three" | "fourd" | "five" | "six" | "box" | "box-2" | "blog" | "docs" | "field" | "tag"

export type AuraHeadline = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
