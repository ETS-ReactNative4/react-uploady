import { CHUNK_EVENTS } from "@rpldy/chunked-sender";
import { generateUploaderEventHook } from "@rpldy/shared-ui";
import "../chunkEventListenerHooks";

jest.mock("@rpldy/shared-ui", () => ({
	generateUploaderEventHook: jest.fn(),
}));

describe("eventListenerHooks tests", () => {
	describe("generateUploaderEventHook tests", () => {
		it.each([
			CHUNK_EVENTS.CHUNK_START,
			CHUNK_EVENTS.CHUNK_FINISH,
		])("should generate chunk event hooks for: %s", (event) => {
			expect(generateUploaderEventHook).toHaveBeenCalledWith(event, false);
		});
	});
});
