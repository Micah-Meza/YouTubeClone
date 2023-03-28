from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'video_id', 'likes', 'dislike', 'text', 'user_id']
        depth = 1