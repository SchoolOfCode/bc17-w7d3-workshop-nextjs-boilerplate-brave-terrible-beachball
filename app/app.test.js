import { test, expect } from '@playwright/test';

test('home page is working', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/BTB Fireplace Palace/);
});

test('review text test', async ({ page }) => {
    //action
    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: 'Scotland' }).click();
    //assert
    const reviewText = page.getByText("We couldn't be happier with our new fireplace");
    await expect(reviewText).toBeVisible();
  } );

  test('clicking link redirects to founders page', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: 'menu' }).click();
    await page.getByRole('link', { name: 'founders' }).click();
    await expect(page).toHaveURL('http://localhost:3000/founders')
    const pageHeading = page.getByText('Meet the artisans')
    await expect(pageHeading).toHaveText('Meet the artisans behind our masterpieces!')
  });


  test('clicking link redirects to booking page', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Book consultation' }).click();
    await expect(page).toHaveURL('http://localhost:3000/booking')
    const pageHeading2 = page.getByText('Design Booking')
    await expect(pageHeading2).toHaveText('Design Booking')
  });

  test('incomplete form gives us an error', async ({page}) => {
    await page.goto('http://localhost:3000/booking');
    const testField = page.getByLabel('Full Name')
    await testField.fill('Oli Kelly'); 
    await page.getByRole('button', { name: 'submit' }).click();
    const errorText = page.getByText("Error!");
    await expect(errorText).toBeVisible();
  });


  test('complete form gives us an submitted', async ({page}) => {
    await page.goto('http://localhost:3000/booking');
    const fullNameTestField = page.getByLabel('Full Name')
    await fullNameTestField.fill('Oli Kelly'); 
    const postCodeTestField = page.getByLabel('Postcode')
    await postCodeTestField.fill('N13 3JE'); 
    const addressTestField = page.getByLabel('House/Flat Number and Street Name')
    await addressTestField.fill('123 fake street'); 
    const cityTestField = page.getByLabel('City')
    await cityTestField.fill('London'); 
    const phoneNumberTestField = page.getByLabel('Phone Number')
    await phoneNumberTestField.fill('1234567780'); 
    const emailTestField = page.getByLabel('Email Address')
    await emailTestField.fill('oli@kelly.com'); 
    await page.getByRole('button', { name: 'submit' }).click();
    const successText = page.getByText("Submitted!");
    await expect(successText).toBeVisible();
  });