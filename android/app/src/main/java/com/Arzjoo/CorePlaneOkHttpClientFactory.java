package com.arzjoo;

import com.facebook.react.modules.network.OkHttpClientFactory;

import com.facebook.react.modules.network.OkHttpClientProvider;
import okhttp3.OkHttpClient;

public class CorePlaneOkHttpClientFactory implements OkHttpClientFactory {
    public OkHttpClient createNewNetworkModuleClient() {
        return OkHttpClientProvider.createClientBuilder()
                .dns(new CorePlaneOkHttpDNSSelector(CorePlaneOkHttpDNSSelector.IPvMode.IPV4_FIRST))
                .build();
    }
}
