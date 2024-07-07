using Auth0.AuthenticationApi;
using System;
using System.Threading.Tasks;

namespace r2cse.net
{
    public class TokenValidationService
    {
        private readonly AuthenticationApiClient _apiClient;

        public TokenValidationService(string domain)
        {
            _apiClient = new AuthenticationApiClient(new Uri($"https://{domain}"));
        }

        public async Task<bool> ValidateTokenAsync(string idToken)
        {
            var validator = new IdentityTokenValidator(_apiClient);
            return await validator.ValidateAsync(idToken);
        }
    }

}
