export interface HttpClientInterface {
    get(endpoint: string): Promise<this>

    post([]): this

    put(): this

    delete(id: number): this

    header([]?): this

    send(): {};

    getConfig(provider: string): this
}