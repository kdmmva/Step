using Grpc.Core;
using GrpcDemo;
using System.Threading.Tasks;

public class Service : ServiceA.ServiceABase
{
    public override Task<MessageReply> SendMessageToB(MessageRequest request, ServerCallContext context)
    {
        return Task.FromResult(new MessageReply { Reply = $"ServiceA received: {request.Message}" });
    }
}

