use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    prost_build::compile_protos(
        &[
            "auth/v1/auth.proto",
            "chat/v1/chat.proto",
            "harmonytypes/v1/types.proto",
        ],
        &["protocol"],
    )?;
    Ok(())
}
