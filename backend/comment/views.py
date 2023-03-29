from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many = True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def posted_comments(request, videoId):
    print('User', f"{request.user.id} {request.user.email} {request.user.username}")

    if request.method == 'GET':
        comments = Comment.objects.filter(video_id = request.videoId)
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        serializer = CommentSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save(user = request.data)
        return Response(serializer.data, status = status.HTTP_201_CREATED)



