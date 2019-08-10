import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStore } from './RootStore';

function useStores() {
    return React.useContext(MobXProviderContext);
};

export function useRootStore():RootStore {
    return useStores().rootStore;
};