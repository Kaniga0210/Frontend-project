import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: "First Blog Post",
            content: "This is the content of the first blog post.",
            image: "",
        },
        {
            id: 2,
            title: "Second Blog Post",
            content: "This is the content of the second blog post.",
            image: "",
        },
        {
            id: 3,
            title: "Third Blog Post",
            content: "This is the content of the third blog post.",
            image: "",
        },
    ];

    return (
        <div>
            <h1>Blog Page</h1>
            {blogs.map((blog) => (
                <Card key={blog.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
                    {blog.image && (
                        <CardMedia
                            component="img"
                            height="140"
                            image={blog.image}
                            alt={blog.title}
                        />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
