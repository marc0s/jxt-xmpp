import { Namespace as NS } from 'xmpp-constants';

export default function (JXT) {
    let NoCopy = JXT.define({
        name: 'noCopy',
        namespace: NS.HINTS,
        element: 'no-copy'
    });
    let NoPermanentStore = JXT.define({
        name: 'noPermanentStore',
        namespace: NS.HINTS,
        element: 'no-permanent-store'
    });
    let NoStore = JXT.define({
        name: 'noStore',
        namespace: NS.HINTS,
        element: 'no-store'
    });
    let Store = JXT.define({
        name: 'store',
        namespace: NS.HINTS,
        element: 'store'
    });

    JXT.extendMessage(NoCopy);
    JXT.extendMessage(NoPermanentStore);
    JXT.extendMessage(NoStore);
    JXT.extendMessage(Store);
}
