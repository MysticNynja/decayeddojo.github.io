from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the blog page
    page.goto("http://localhost:3000/blog")

    # Check for the main blog heading
    expect(page.get_by_role("heading", name="Blog")).to_be_visible()

    # Check that both posts are listed
    first_post_link = page.get_by_role("link", name="My First Blog Post")
    second_post_link = page.get_by_role("link", name="A Deeper Dive into Content Blocks")

    expect(first_post_link).to_be_visible()
    expect(second_post_link).to_be_visible()

    # Click on the first post
    first_post_link.click()

    # Wait for navigation and check for the post title
    expect(page.get_by_role("heading", name="My First Blog Post")).to_be_visible()

    # Check for some content from the post
    expect(page.get_by_text("Welcome to my blog!")).to_be_visible()
    expect(page.get_by_text("This is my very first post, created using the new TinaCMS block editor.")).to_be_visible()
    expect(page.get_by_text("The journey of a thousand miles begins with a single step.")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/blog_post_verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)