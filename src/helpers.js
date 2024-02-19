function apiUrl() {
    return process.env.VUE_APP_API_URL ?? 'https://orfed.com.br'
}

export {
    apiUrl
}
