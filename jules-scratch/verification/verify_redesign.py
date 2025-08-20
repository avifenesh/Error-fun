import re
from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # 1. Navigate to the page
    page.goto("http://localhost:1234")

    # 2. Fill in the error message
    error_textarea = page.get_by_label("Error Message")
    expect(error_textarea).to_be_visible()
    error_textarea.fill("TypeError: Cannot read properties of undefined")

    # 3. Select a style
    haiku_style = page.get_by_text("Haiku")
    expect(haiku_style).to_be_visible()
    haiku_style.click()

    # 4. Click the button
    crack_button = page.get_by_role("button", name="Crack Fortune Cookie")
    crack_button.click()

    # 5. Wait for the result and verify it
    fortune_content = page.locator(".fortune-content")
    expect(fortune_content).to_be_visible(timeout=5000) # Wait up to 5s for animation

    # Check that the wisdom text is present
    wisdom_text = fortune_content.locator(".fortune-text")
    expect(wisdom_text).to_have_text(re.compile(r".+")) # Checks for non-empty text

    # 6. Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

print("Verification script completed and screenshot taken.")
