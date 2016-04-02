module.exports = {

	// The amount of bytes/characters that should be sent over BLE at once
	BLE_MAX_CHUNK_SIZE: 20,

	// The character that marks the end of a message
	MESSAGE_TERMINATOR: "~",

	// The UUID for outgoing service characteristic
	READ_CHARACTERISTIC_UUID: "6e400003b5a3f393e0a9e50e24dcca9e",

	// The UUID for incoming service characteristic
	WRITE_CHARACTERISTIC_UUID: "6e400002b5a3f393e0a9e50e24dcca9e",

	// UUID for UART service
	// NOTE: Not sure if this is unique or not per device
	UART_SERVICE_UUID: "6e400001b5a3f393e0a9e50e24dcca9e"

};