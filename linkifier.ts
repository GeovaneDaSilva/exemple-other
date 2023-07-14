import { Autolinker, AutolinkerConfig, HashtagMatch } from "autolinker";
//https://github.com/gregjacobs/Autolinker.js

const AUTOLINKER_CFGS: AutolinkerConfig = {
  urls: {
    schemeMatches: true,
    tldMatches: true,
    ipV4Matches: true
    
  },
  email: true,
  phone: true,
  mention: "twitter",
  hashtag: "facebook",
  stripPrefix: false,
  //stripPrefix: StripPrefixConfig;
  stripTrailingSlash: false,
  newWindow: true,
  truncate: {
    length: 0,
    location: "middle",
  },
  decodePercentEncoding: true,
  className: 'mylinks',
  sanitizeHtml: false
};

export class Linkifier {
  private autolinker: Autolinker;

  constructor() {
    this.autolinker = new Autolinker(AUTOLINKER_CFGS);
  }

  public link(textOrHtml: string): string {
    return this.autolinker.link(textOrHtml);
  }
}