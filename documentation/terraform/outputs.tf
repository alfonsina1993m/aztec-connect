output "cloudfront" {
  value = "${aws_cloudfront_distribution.documentation_distribution.domain_name}"
}

output "aws" {
  value = "${aws_s3_bucket.documentation.bucket}"
}
