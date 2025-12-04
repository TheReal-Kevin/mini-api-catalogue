import unittest
from operations import addition, maximum, format_nom


class TestOperations(unittest.TestCase):

    def test_addition_positifs(self):
        """Test addition avec deux nombres positifs."""
        self.assertEqual(addition(2, 3), 5)

    def test_addition_negatifs(self):
        """Test addition avec nombres négatifs."""
        self.assertEqual(addition(-2, -3), -5)

    def test_addition_zero(self):
        """Test addition avec zéro."""
        self.assertEqual(addition(0, 5), 5)

    def test_maximum_premier_plus_grand(self):
        """Test maximum quand le premier argument est le plus grand."""
        self.assertEqual(maximum(10, 5), 10)

    def test_maximum_deuxieme_plus_grand(self):
        """Test maximum quand le deuxième argument est le plus grand."""
        self.assertEqual(maximum(3, 8), 8)

    def test_maximum_egaux(self):
        """Test maximum quand les deux arguments sont égaux."""
        self.assertEqual(maximum(5, 5), 5)

    def test_format_nom_normal(self):
        """Test format_nom avec un nom normal."""
        self.assertEqual(format_nom("alice"), "Alice")

    def test_format_nom_majuscules(self):
        """Test format_nom avec un nom en majuscules."""
        self.assertEqual(format_nom("BOB"), "Bob")

    def test_format_nom_mixte(self):
        """Test format_nom avec un nom en casse mixte."""
        self.assertEqual(format_nom("cHarLie"), "Charlie")

    def test_format_nom_vide(self):
        """Test format_nom avec une chaîne vide."""
        self.assertEqual(format_nom(""), "")


if __name__ == '__main__':
    unittest.main()
