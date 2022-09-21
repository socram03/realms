/**
 * In the near future, if guilded takes a different approach with a focus on big bots,
 * some measures will have to be taken.
 */

export class ShardManager {
	options: number;

	constructor() {
		this.options = 1;
	}

	/**
	 * Generic method, in case guilded becomes more complex in the future.
	 */
	async spawns(): Promise<void> {
		await this.connect(1);
	}

	/**
	 * Generic method, in case guilded becomes more complex in the future.
	 */

	private async connect(id: number): Promise<void> {
		//
	}
}
