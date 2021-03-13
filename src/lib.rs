extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use bytes::BytesMut;
use cfg_if::cfg_if;
use prost::Message;
use wasm_bindgen::prelude::*;

pub mod auth {
    pub mod v1 {
        include!(concat!(env!("OUT_DIR"), "/protocol.auth.v1.rs"));
    }
    pub use v1::*;
}

pub mod chat {
    pub mod v1 {
        include!(concat!(env!("OUT_DIR"), "/protocol.chat.v1.rs"));
    }
    pub use v1::*;
}

pub mod harmonytypes {
    pub mod v1 {
        include!(concat!(env!("OUT_DIR"), "/protocol.harmonytypes.v1.rs"));
    }
    pub use v1::*;
}

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn create_message() -> Vec<u8> {
    let mut buf = BytesMut::with_capacity(1024);
    let mut send_message_request = chat::SendMessageRequest::default();
    send_message_request.channel_id = 0;
    send_message_request.content = "Hello, world".to_string();
    send_message_request.encode(&mut buf);
    return buf.to_vec();
}
