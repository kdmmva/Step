using Grpc.Net.Client;
using GrpcDemo;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

public class ServiceB
{
    private readonly ILogger<ServiceB> _logger;

    public ServiceB(ILogger<ServiceB> logger)
    {
        _logger = logger;
    }

    public async Task CallServiceA()
    {
        var channel = GrpcChannel.ForAddress("https://localhost:7105");
        var client = new ServiceA.ServiceAClient(channel);

        var request = new MessageRequest { Message = "Hello from ServiceB!" };
        var response = await client.SendMessageToBAsync(request);

        _logger.LogInformation("Received from ServiceA: " + response.Reply);
    }
}

