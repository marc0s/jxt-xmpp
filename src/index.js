import Addresses from './addresses';
import Avatar from './avatar';
import Bind from './bind';
import Blocking from './blocking';
import BOB from './bob';
import Bookmarks from './bookmarks';
import BOSH from './bosh';
import Carbons from './carbons';
import Command from './command';
import CSI from './csi';
import Dataforms from './dataforms';
import Delayed from './delayed';
import Disco from './disco';
import StanzaError from './error';
import ExtDisco from './extdisco';
import File from './file';
import File3 from './file3';
import Forwarded from './forwarded';
import Framing from './framing';
import GeoLoc from './geoloc';
import Hash from './hash';
import Hats from './hats';
import UDP from './iceUdp';
import IBB from './ibb';
import IQ from './iq';
import JIDPrep from './jidprep';
import Jingle from './jingle';
import JSONData from './json';
import Eventlog from './logging';
import MAM from './mam';
import Markers from './markers';
import Message from './message';
import Mood from './mood';
import MUC from './muc';
import Nick from './nick';
import OOB from './oob';
import Ping from './ping';
import Presence from './presence';
import Private from './private';
import PSA from './psa';
import Pubsub from './pubsub';
import PubsubError from './pubsubError';
import PubsubEvents from './pubsubEvents';
import PubsubOwner from './pubsubOwner';
import Push from './push';
import Reach from './reach';
import Register from './register';
import References from './references';
import Roster from './roster';
import RSM from './rsm';
import RTP from './rtp';
import RTT from './rtt';
import SASL from './sasl';
import Session from './session';
import Shim from './shim';
import SM from './sm';
import Stream from './stream';
import StreamError from './streamError';
import StreamFeatures from './streamFeatures';
import Time from './time';
import Tune from './tune';
import VCardTemp from './vcard';
import Version from './version';
import Visibility from './visibility';


export default function (JXT) {

    JXT.use(Addresses);
    JXT.use(Avatar);
    JXT.use(Bind);
    JXT.use(Blocking);
    JXT.use(BOB);
    JXT.use(Bookmarks);
    JXT.use(BOSH);
    JXT.use(Carbons);
    JXT.use(Command);
    JXT.use(CSI);
    JXT.use(Dataforms);
    JXT.use(Delayed);
    JXT.use(Disco);
    JXT.use(StanzaError);
    JXT.use(ExtDisco);
    JXT.use(File);
    JXT.use(File3);
    JXT.use(Forwarded);
    JXT.use(Framing);
    JXT.use(GeoLoc);
    JXT.use(Hash);
    JXT.use(Hats);
    JXT.use(UDP);
    JXT.use(IBB);
    JXT.use(IQ);
    JXT.use(JIDPrep);
    JXT.use(Jingle);
    JXT.use(JSONData);
    JXT.use(Eventlog);
    JXT.use(MAM);
    JXT.use(Markers);
    JXT.use(Message);
    JXT.use(Mood);
    JXT.use(MUC);
    JXT.use(Nick);
    JXT.use(OOB);
    JXT.use(Ping);
    JXT.use(Presence);
    JXT.use(Private);
    JXT.use(PSA);
    JXT.use(Pubsub);
    JXT.use(PubsubError);
    JXT.use(PubsubEvents);
    JXT.use(PubsubOwner);
    JXT.use(Push);
    JXT.use(Reach);
    JXT.use(Register);
    JXT.use(References);
    JXT.use(Roster);
    JXT.use(RSM);
    JXT.use(RTP);
    JXT.use(RTT);
    JXT.use(SASL);
    JXT.use(Session);
    JXT.use(Shim);
    JXT.use(SM);
    JXT.use(Stream);
    JXT.use(StreamError);
    JXT.use(StreamFeatures);
    JXT.use(Time);
    JXT.use(Tune);
    JXT.use(VCardTemp);
    JXT.use(Version);
    JXT.use(Visibility);
}
