package com.asheforplugins.capacitorpaystack;

import com.getcapacitor.JSObject;
import com.asheforplugins.capacitorpaystack;
import com.asheforplugins.capacitorpaystackCall;
import com.asheforplugins.capacitorpaystackMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "PaystackCapacitor")
public class PaystackCapacitorPlugin extends Plugin {

    private PaystackCapacitor implementation = new PaystackCapacitor();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
