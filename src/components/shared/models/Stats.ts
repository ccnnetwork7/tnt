export default interface Stats {
    keywords: {
        token_name: string
        market_cap: string
        volume24h: string
        token_supply: string
        market_rank: string
        price: string
    },
    values: {
        token_name: string
        market_cap: string
        volume24h: string
        token_supply: string
        market_rank: string
        price: string
        fluctuation: string
    },
    is_number_color_red: boolean
}
